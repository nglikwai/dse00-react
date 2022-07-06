import IconSend from 'public/static/images/icon-send.svg'
import React from 'react'
import { theme } from 'src/constants/theme'
import styled from 'styled-components'

const ReplyBox = () => {
  return (
    <Wrapper>
      <img src='/static/images/default_avatar.png' width={25} height={25} />
      <ReplyBody placeholder='此功能未開通' />
      <IconWrapper onClick={() => alert('此功能未開通')}>
        <IconSend fill={theme.palette.mainTheme} />
      </IconWrapper>
    </Wrapper>
  )
}

export default ReplyBox

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0s;
`

const ReplyBody = styled.input`
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
`

const IconWrapper = styled.div`
  padding-left: 10px;
  cursor: pointer;
`
