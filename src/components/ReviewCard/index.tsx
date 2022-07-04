import dayjs from 'dayjs'
import React from 'react'
import { Review } from 'src/types'
import { initializeDayjs } from 'src/utils/urlUtils'
import styled from 'styled-components'

import ReplyCard from '../ReplyCard'

const ReviewCard = ({ review }: { review: Review }) => {
  initializeDayjs()

  return (
    <OuterWrapper>
      <Wrapper>
        <UserWrapper>
          <Avator
            src='/static/images/default_avatar.png'
            width={40}
            height={40}
            level={review.author.level}
          />
        </UserWrapper>

        <ReviewWrapper>
          <ReviewBody>
            <ReviewAuthor>
              {review.author.username.toUpperCase()}
              <Grade level={review.author.level}>
                {review.author.level > 5 && review.author.grade}
              </Grade>
            </ReviewAuthor>
            {review.body}
          </ReviewBody>
          <ActionWrapper>
            {dayjs(review.createdAt).fromNow().substring(0, 3)}
            <Action>Reply</Action>
          </ActionWrapper>
        </ReviewWrapper>
      </Wrapper>
      <ReplyWrapper>
        {review.reply.map((reply, index) => (
          <ReplyCard
            key={reply}
            reply={reply}
            author={review.replyAuthor[index]}
          />
        ))}
      </ReplyWrapper>
    </OuterWrapper>
  )
}

export default ReviewCard

const Avator = styled(props => <img {...props} />)`
  box-shadow: 0 0 8px ${props => (props.level > 4 ? '#fff' : 'transparent')};
  border-radius: 50%;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`

const OuterWrapper = styled.div``

const ReviewAuthor = styled.div`
  font-size: 13px;
  font-weight: bold;
  padding-bottom: 4px;
  opacity: 0.7;
  display: flex;
  align-items: center;
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 10px 60px;
  opacity: 0.8;
`

const ReviewBody = styled.div`
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.palette.tertiaryColor};
  border-radius: 0.8rem;
  margin: 2px 0;
`

const UserWrapper = styled.div``

const Grade = styled(props => <div {...props} />)`
  margin-left: 10px;
  text-shadow: 0 0 5px ${props => (props.level > 4 ? '#ffe875' : 'transparent')};
`

const ActionWrapper = styled.div`
  color: #999;
  font-size: 14px;
  padding: 0 20px;
`

const ReviewWrapper = styled.div`
  margin: 0 10px;
`

const Action = styled.span`
  padding: 10px;
`
