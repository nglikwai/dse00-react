import * as R from 'ramda'
import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const PageWrapper = (props: Props) => {
  const { children } = props

  return (
    <Wrapper>
      <InnerWrapper>
        <ContentWrapper withTopPadding>{children}</ContentWrapper>
        <Footer />
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.backgroundColor};
  font-family: ${({ theme }) => theme.fontFamily};
  transition: 1s;
`

// https://stackoverflow.com/a/31835167
const InnerWrapper = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: calc(100vh - 165px);
  max-width: 1200px;
  padding: 60px 10px 100px 10px;
  margin: 0 auto;
`

const ContentWrapper = styled(props => (
  <div {...R.omit(['withTopPadding'], props)} />
))`
  padding: 10px 0;
  flex: auto;
  position: relative;
  color: ${({ theme }) => theme.fontColor};
`

export default PageWrapper
