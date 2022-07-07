import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Footer from 'src/components/global/Footer'
import PostLoader from 'src/components/PostLoader'
import styled from 'styled-components'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const submitHandler = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push('/')
    }, 1500)
  }

  return (
    <>
      <Wrapper>
        <Word>登入</Word>
        <Welcome>歡迎來到 DSE00</Welcome>
        <DefaultInput placeholder='用戶名稱' required />
        <DefaultInput placeholder='密碼' type='password' required />
        <SubmitButton disabled={isLoading} onClick={submitHandler}>
          登入
        </SubmitButton>
      </Wrapper>
      {isLoading && <PostLoader />}

      <Footer />
    </>
  )
}

export default Login

const Word = styled.div`
  font-weight: bold;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  > * {
    margin: 12px 0;
  }
`

const Welcome = styled.div`
  width: 100%;
  max-width: 300px;
  font-weight: bold;
  border-top: 1px solid #ccc;
  padding: 30px 0 10px 0;
`

const DefaultInput = styled.input`
  &::placeholder {
    color: #ccc;
  }
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 2rem;
  max-width: 300px;
  font-size: 18px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  color: ${({ theme }) => theme.fontColor}; ;
`

const SubmitButton = styled.button`
  &:disabled {
    opacity: 0.3;
  }
  background-color: ${({ theme }) => theme.palette.mainTheme};
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 2rem;
  max-width: 320px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
`
