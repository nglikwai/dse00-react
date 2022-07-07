import { useGesture } from '@use-gesture/react'
import * as R from 'ramda'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsdown } from 'src/redux/user'
import styled from 'styled-components'
type Props = {
  children: React.ReactNode
}

const PageWrapper = (props: Props) => {
  const { children } = props

  const dispatch = useDispatch()

  const bind = useGesture({
    onWheel: state => {
      state.direction[1] > 0 &&
        state.velocity[1] > 30 &&
        dispatch(setIsdown(true))
      state.direction[1] < 0 &&
        state.velocity[1] > 50 &&
        dispatch(setIsdown(false))
    },
    onDrag: state => {
      state.direction[1] > 0 &&
        state.distance[1] > 30 &&
        dispatch(setIsdown(true))
      state.direction[1] < 0 &&
        state.distance[1] > 40 &&
        dispatch(setIsdown(false))
    },
  })

  return (
    <Wrapper {...bind()}>
      <InnerWrapper>
        <ContentWrapper withTopPadding>{children}</ContentWrapper>
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
  padding: 10px 10px 100px 10px;
  margin: 0 auto;
  position: relative;
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
