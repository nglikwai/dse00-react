import React, { useState } from 'react'
import Footer from 'src/components/global/Footer'
import PostLoader from 'src/components/PostLoader'
import styled from 'styled-components'

const Jupas = () => {
  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = () => {
    setIsLoading(true)
    setTimeout(() => {
      alert('尚未開通')
    }, 1500)
  }

  return (
    <>
      <Wrapper>
        <Word>JUPAS CUTOFF </Word>

        <DefaultInput placeholder='Jupas Code (not yet open)' required />
        <SubmitButton disabled={isLoading} onClick={submitHandler}>
          搜尋
        </SubmitButton>
      </Wrapper>
      {isLoading && <PostLoader />}
      <Footer />
    </>
  )
}

export default Jupas

const Word = styled.div`
  font-weight: bold;
  font-size: 20px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  > * {
    margin: 20px 0;
  }
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
  padding: 0 30px;
`

const SubmitButton = styled.button`
  &:disabled {
    background-color: #ccc;
  }
  background-color: ${({ theme }) => theme.palette.mainTheme};
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 2rem;
  max-width: 320px;
  font-size: 18px;
  color: ${({ theme }) => theme.palette.backgroundColor};
  cursor: pointer;
  transition: 0.3s;
`
