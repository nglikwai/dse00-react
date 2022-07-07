import React from 'react'
import styled, { keyframes } from 'styled-components'

const PostLoader = () => {
  return (
    <Wrapper>
      <LoaderBar />
    </Wrapper>
  )
}

export default PostLoader

const rollIn = keyframes`
  0% {transform:translateX(-100%)}
  100% {transform:translateX(-20%)}
`

const Wrapper = styled.div`
  :hover {
    background-color: ${({ theme }) => theme.palette.secondaryColor};
  }
  padding: 20px 12px;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 2rem;
`

const LoaderBar = styled.div`
  background-color: ${({ theme }) => theme.palette.mainTheme};
  width: 150%;
  height: 2px;
  animation: ${rollIn} 5s ease-out infinite;
`
