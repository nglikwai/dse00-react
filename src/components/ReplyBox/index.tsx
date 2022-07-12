import IconSend from 'public/static/images/icon-send.svg'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { theme } from 'src/constants/theme'
import { postReplyRequest } from 'src/redux/post'
import styled from 'styled-components'

const ReplyBox = ({
  postId,
  reviewId,
  setIsReply,
}: {
  postId: string
  reviewId: string
  setIsReply: (arg: boolean) => void
}) => {
  const [reply, setReply] = useState('')

  const dispatch = useDispatch()

  const postReplyHandler = () => {
    dispatch(postReplyRequest({ postId, reviewId, reply }))
    setReply('')
    setIsReply(false)
  }

  return (
    <Wrapper>
      <img src='/static/images/default_avatar.png' width={25} height={25} />
      <ReplyInput
        placeholder='留言'
        value={reply}
        onChange={e => setReply(e.target.value)}
      />
      <IconWrapper onClick={postReplyHandler}>
        <IconSend fill={theme.palette.mainTheme} />
      </IconWrapper>
    </Wrapper>
  )
}

export default ReplyBox

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`

const ReplyInput = styled.input`
  &::placeholder {
    color: #bbb;
  }
  font-size: 15px;
  margin-left: 12px;
  border-radius: 1rem;
  border: 1px solid #ccc;
  height: 30px;
  width: 200px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
`

const IconWrapper = styled.div`
  padding-left: 10px;
  cursor: pointer;
`
