import dayjs from 'dayjs'
import Chat from 'public/static/images/icon-chat.svg'
import React from 'react'
import { initializeDayjs } from 'src/utils/urlUtils'
import styled from 'styled-components'

const CommentCount = ({ count, update }: { count: number; update: Date }) => {
  initializeDayjs()

  return (
    <OuterWrapper>
      <Date>{dayjs(update).fromNow()}</Date>
      <Wrapper>
        <Chat fill='rgb(151, 199, 226)' /> <Count>{count}</Count>
      </Wrapper>
    </OuterWrapper>
  )
}

export default CommentCount

const Wrapper = styled.div`
  color: rgb(151, 199, 226);
  padding: 3px 5px;
  border-radius: 30%;
  background-color: rgba(201, 228, 255, 0.3);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Count = styled.span`
  padding: 0 4px;
`

const OuterWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
`

const Date = styled.div`
  color: #ccc;
  font-size: 13px;
  padding-right: 10px;
`
