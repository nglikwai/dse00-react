import { useRouter } from 'next/router'
import ArrowDown from 'public/static/images/icon-arrow-down.svg'
import Send from 'public/static/images/icon-send.svg'
import * as R from 'ramda'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postRequest } from 'src/redux/post'
import { setIsdown } from 'src/redux/user'
import styled, { css } from 'styled-components'

const ChatInputBox = () => {
  const [term, setTerm] = useState('')

  const router = useRouter()

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(
      postRequest({
        title: term,
        description: '如題',
        id: router.query.id,
        isPost: R.isEmpty(router.query),
      })
    )
    setTerm('')
  }

  return (
    <>
      <Input
        value={term}
        onChange={e => setTerm(e.target.value)}
        onClick={() => dispatch(setIsdown(false))}
        required
      />
      <SendButton className='nav-chat-button' onClick={handleSubmit}>
        <Send fill='white' />
      </SendButton>
      <BackButton>
        <ArrowDown fill='white' />
      </BackButton>
      {R.isEmpty(router.query) ? 'Chat' : 'Reply'}
    </>
  )
}

export default ChatInputBox

const baseButton = css`
  background-color: ${({ theme }) => theme.palette.mainTheme};
  position: absolute;
  border: none;
  transition: 0.3s ease-in;
  width: 12%;
  height: 0;
  opacity: 0;
  cursor: pointer;
  transform: scale(0);
`

const BackButton = styled.button`
  ${baseButton}
  left: 4px;
`

const SendButton = styled.button`
  ${baseButton}
  right: 13px;
  width: 11%;
`

const Input = styled.input`
  &:focus {
    outline: none !important;
    border: none;
    width: 70%;
    height: 35px;
    border-radius: 2rem;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.secondaryColor};
    padding: 8px;
    color: ${({ theme }) => theme.fontColor};
  }
  &:focus ~ button {
    transform: scale(1);
    position: absolute;
    opacity: 1;
    height: 50px;
  }
  margin: 0;
  border: 2px solid white;
  background-color: transparent;
  width: 25px;
  height: 20px;
  border-radius: 50%;

  border-bottom-left-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.backgroundColor};
`
