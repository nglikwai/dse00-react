import { animated } from '@react-spring/web'
import React from 'react'
import Footer from 'src/components/global/Footer'
import styled from 'styled-components'

const Login = () => {
  return (
    <>
      <Wrapper>login</Wrapper>
      <Footer />
    </>
  )
}

export default Login

const Wrapper = styled(animated.div)`
  height: 2000px;
`
