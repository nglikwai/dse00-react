import Link from 'next/link'
import User from 'public/static/images/icon-account.svg'
import ArrowDown from 'public/static/images/icon-arrow-down.svg'
import Jupas from 'public/static/images/icon-graduation.svg'
import Blogger from 'public/static/images/icon-post.svg'
import Cutoff from 'public/static/images/icon-school.svg'
import Send from 'public/static/images/icon-send.svg'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postRequest } from 'src/redux/post'
import styled from 'styled-components'

const Footer = () => {
  const [term, setTerm] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(
      postRequest({
        title: term,
        description: '如題',
      })
    )
    setTerm('')
  }

  return (
    <Wrapper>
      <FooterWrapper>
        <Link href='https://dse00.blogspot.com/'>
          <Item>
            <Blogger fill='white' />
            <span>Blog</span>
          </Item>
        </Link>
        <Link href='/cutoffs'>
          <Item>
            <Cutoff fill='white' />
            CutOff
          </Item>
        </Link>

        <Item>
          <Input value={term} onChange={e => setTerm(e.target.value)} />
          <SendButton className='nav-chat-button' onClick={handleSubmit}>
            <Send fill='white' />
          </SendButton>
          <BackButton>
            <ArrowDown fill='white' />
          </BackButton>
          Chat
        </Item>
        <Link href='/jupas'>
          <Item>
            <Jupas fill='white' />
            JUPAS
          </Item>
        </Link>
        <Link href='/user/login'>
          <Item>
            <User fill='white' />
            登入
          </Item>
        </Link>
      </FooterWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 100%;
  background-color: ${({ theme }) => theme.palette.mainTheme};
  height: 72px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.93;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  transition: background-color 1s;
`

const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 12px;
  height: 100%;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  justify-content: space-between;
  transition: 0.3s;
  height: 70%;
`

const BackButton = styled.button`
  position: absolute;
  transform: translateY(70px);
  left: 4px;
  border: none;
  background-color: ${({ theme }) => theme.palette.mainTheme};
  transition: 0.3s ease-in;
  width: 12%;
  height: 0;
  opacity: 0;
  cursor: pointer;
`

const SendButton = styled.button`
  position: absolute;
  transform: translateY(70px);
  right: 13px;
  border: none;
  background-color: ${({ theme }) => theme.palette.mainTheme};
  transition: 0.3s ease-in;
  width: 11%;
  height: 0;
  opacity: 0;
  cursor: pointer;
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
    transform: translateY(0px);
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

export default Footer
