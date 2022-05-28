import * as R from 'ramda'
import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const PageWrapper = (props: Props) => {
  const { children, ...restProps } = props

  return (
    <Wrapper {...restProps}>
      <InnerWrapper>
        <Header />
        <ContentWrapper withTopPadding>{children}</ContentWrapper>
        <Footer />
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.backgroundColor};
`

// https://stackoverflow.com/a/31835167
const InnerWrapper = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrapper = styled(props => (
  <div {...R.omit(['withTopPadding'], props)} />
))`
  flex: auto;
  padding-top: ${({ withTopPadding }) => (withTopPadding ? '44px' : '0px')};
  position: relative;
`

export default PageWrapper
