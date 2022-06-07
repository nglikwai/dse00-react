import IconSend from 'public/static/images/icon-send.svg'
import React from 'react'
import styled from 'styled-components'

type Props = {
  onCommented: () => void
}

const CommentBox = (props: Props) => {
  const { onCommented } = props

  return (
    <CommentWrapper>
      <img src='/user.png' width='90px' height='90px' />
      <RightWrapper>
        <Name>陳小明</Name>
        <Comment />
        <SubmitButton onClick={onCommented}>
          <IconSend fill='white' />
        </SubmitButton>
      </RightWrapper>
    </CommentWrapper>
  )
}

const Name = styled.div`
  font-weight: bold;
`

const Comment = styled.textarea`
  padding: 12px;
  margin-top: 12px;
  width: 100%;
  height: 100px;
  border-radius: 1rem;
  border: 1px solid #ccc;
`

const SubmitButton = styled.button`
  &:hover {
    background-color: #dd0000;
  }
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 1.5rem;
  padding: 8px 12px;
  margin: 12px;
  transition: 0.4s;
`

const CommentWrapper = styled.div`
  display: flex;
  margin: 30px 0;
  width: 100%;
`

const RightWrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
`

export default CommentBox
