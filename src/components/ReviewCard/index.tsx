import dayjs from 'dayjs'
import React, { useState } from 'react'
import { Review } from 'src/types'
import { initializeDayjs } from 'src/utils/urlUtils'
import styled from 'styled-components'

import ReplyBox from '../ReplyBox'
import ReplyCard from '../ReplyCard'

const ReviewCard = ({ review }: { review: Review }) => {
  initializeDayjs()

  const [isReply, setIsReply] = useState(false)

  return (
    <OuterWrapper>
      <Wrapper>
        <UserWrapper>
          <Avator
            src='/static/images/default_avatar.png'
            width={40}
            height={40}
            level={review.author ? review.author.level : 1}
          />
        </UserWrapper>

        <ReviewWrapper>
          <ReviewBody>
            <ReviewAuthor>
              {review.author.username
                ? review.author.username.toUpperCase()
                : 'DSEJJ'}
              <Grade level={review.author ? review.author.level : 1}>
                {review.author
                  ? review.author.level > 5 && review.author.grade
                  : ''}
              </Grade>
            </ReviewAuthor>
            {review.body}
          </ReviewBody>
          <ActionWrapper>
            {dayjs(review.createdAt).fromNow()}
            <Action onClick={() => setIsReply(!isReply)}>Reply</Action>
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
        {isReply && <ReplyBox />}
      </ReplyWrapper>
    </OuterWrapper>
  )
}

export default ReviewCard

const Avator = styled(props => <img {...props} />)`
  box-shadow: 0 0 8px ${props => (props.level > 4 ? '#fff' : 'transparent')};
  border-radius: 50%;
  padding-top: 8px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
`

const OuterWrapper = styled.div``

const ReviewAuthor = styled.div`
  font-size: 13px;
  font-weight: bold;
  padding-bottom: 3px;
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
  font-size: 13px;
  padding: 0 16px;
`

const ReviewWrapper = styled.div`
  margin: 0 10px;
`

const Action = styled.button`
  padding: 6px 0 4px 15px;
  background: none;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 13px;
`
